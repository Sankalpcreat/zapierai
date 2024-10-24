from sqlalchemy.orm import Session
from models.workflow import Workflow
from schemas.workflow import WorkflowCreate


def create_workflow(db:Session,workflow_data:WorkflowCreate):
    workflow=Workflow(
        name=workflow_data.name,
        description=workflow_data.description,
        is_active=True
    )
    db.add(workflow)
    db.commit()
    db.refresh(workflow)
    return workflow

def get_workflow(db: Session, workflow_id: int):
    return db.query(Workflow).filter(Workflow.id == workflow_id).first()


def update_workflow_status(db:Session,workflow_id:int,status:bool):
    workflow=db.query(Workflow).filter(Workflow.id==workflow_id).first()
    if workflow:
        workflow.is_active=status
        db.commit()
        db.refresh(workflow)
    return workflow