from sqlalchemy.orm import Session
from models.workflow import Workflow
from schemas.workflow import WorkflowCreate


def create_new_workflow(workflow_data: WorkflowCreate, db: Session):
 
    new_workflow = Workflow(
        name=workflow_data.name,
        description=workflow_data.description
    )
    db.add(new_workflow)
    db.commit()
    db.refresh(new_workflow)
    return new_workflow

def get_all_workflows(db: Session):
    
    return db.query(Workflow).all()

def get_workflow_by_id(workflow_id: int, db: Session):
   
    return db.query(Workflow).filter(Workflow.id == workflow_id).first()


def update_workflow(workflow_id: int, workflow_data: WorkflowCreate, db: Session):
   
    workflow = db.query(Workflow).filter(Workflow.id == workflow_id).first()
    if workflow:
        workflow.name = workflow_data.name
        workflow.description = workflow_data.description
        db.commit()
        db.refresh(workflow)
        return workflow
    return None

def delete_workflow(workflow_id: int, db: Session):
   
    workflow = db.query(Workflow).filter(Workflow.id == workflow_id).first()
    if workflow:
        db.delete(workflow)
        db.commit()
        return True
    return False