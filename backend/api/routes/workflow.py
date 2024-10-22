from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas.workflow import WorkflowCreate, WorkflowResponse
from services.workflow_service import create_workflow, get_workflow
from core.database import get_db

router = APIRouter()

@router.post("/", response_model=WorkflowResponse)
def create_new_workflow(workflow: WorkflowCreate, db: Session = Depends(get_db)):
    return create_workflow(db, workflow)

@router.get("/{workflow_id}", response_model=WorkflowResponse)
def get_workflow_by_id(workflow_id: int, db: Session = Depends(get_db)):
    workflow = get_workflow(db, workflow_id)
    if workflow is None:
        raise HTTPException(status_code=404, detail="Workflow not found")
    return workflow

@router.get("/")
def list_all_workflows(db: Session = Depends(get_db)):
    return db.query(Workflow).all()
