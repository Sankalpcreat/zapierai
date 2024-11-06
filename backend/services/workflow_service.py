from sqlalchemy.orm import Session
from models.workflow import Workflow
from schemas.workflow import WorkflowCreate


def create_new_workflow(workflow_data: WorkflowCreate, db: Session) -> Workflow:
    new_workflow = Workflow(
        name=workflow_data.name,
        description=workflow_data.description
    )
    db.add(new_workflow)
    db.commit()
    db.refresh(new_workflow)
    return new_workflow

def get_all_workflows(db: Session) -> list[Workflow]:
    return db.query(Workflow).all()


def get_workflow_by_id(workflow_id: int, db: Session) -> Workflow:
    return db.query(Workflow).filter(Workflow.id == workflow_id).first()


def update_workflow(workflow_id: int, workflow_data: WorkflowCreate, db: Session) -> Workflow:
    workflow = get_workflow_by_id(workflow_id, db)
    if workflow:
        workflow.name = workflow_data.name
        workflow.description = workflow_data.description
        db.commit()
        db.refresh(workflow)
    return workflow

def delete_workflow(workflow_id: int, db: Session) -> bool:
    workflow = get_workflow_by_id(workflow_id, db)
    if workflow:
        db.delete(workflow)
        db.commit()
        return True
    return False
