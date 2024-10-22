from celery import shared_task
from app.services.email_service import send_email
from app.db.session import SessionLocal
from sqlalchemy.exc import SQLAlchemyError
from app.models.task import Task  

@shared_task
def send_email_task(task_id: int, recipient: str, subject: str, body: str):
    """
    Celery task to send an email and update the status of the task in the database.
    """
    db = SessionLocal()
    try:
      
        task = db.query(Task).filter(Task.id == task_id).first()
        if not task:
            print(f"Task with ID {task_id} not found.")
            return


        task.status = "in_progress"
        db.commit()

    
        print(f"Started sending email for task {task_id} to {recipient}.")

    
        response_status = send_email(recipient, subject, body)

        if response_status == 200:
          
            task.status = "completed"
            print(f"Email sent successfully for task {task_id} to {recipient}.")
        else:
         
            task.status = "failed"
            print(f"Failed to send email for task {task_id}. Status code: {response_status}")

   
        db.commit()

    except SQLAlchemyError as e:
     
        db.rollback()
        print(f"Database error for email task {task_id}: {e}")
        if task:
            task.status = "failed"
            db.commit()

    except Exception as e:
       
        print(f"Error during email sending for task {task_id}: {e}")
        if task:
            task.status = "failed"
            db.commit()

    finally:
   
        db.close()
