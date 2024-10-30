from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas.workflow import WorkflowCreate, WorkflowResponse
from services.workflow_service import create_new_workflow, get_all_workflows, get_workflow_by_id, update_workflow, delete_workflow
from core.database import get_db

router = APIRouter()

# Get all workflows
@router.get("/", response_model=list[WorkflowResponse])
def list_workflows(db: Session = Depends(get_db)):
    workflows = get_all_workflows(db)
    return workflows

# Get a single workflow by ID
@router.get("/{workflow_id}", response_model=WorkflowResponse)
def retrieve_workflow(workflow_id: int, db: Session = Depends(get_db)):
    workflow = get_workflow_by_id(workflow_id, db)
    if not workflow:
        raise HTTPException(status_code=404, detail="Workflow not found")
    return workflow

# Create a new workflow
@router.post("/", response_model=WorkflowResponse)
def create_workflow(workflow_data: WorkflowCreate, db: Session = Depends(get_db)):
    new_workflow = create_new_workflow(workflow_data, db)
    return new_workflow

# Update a workflow
@router.put("/{workflow_id}", response_model=WorkflowResponse)
def update_workflow_route(workflow_id: int, workflow_data: WorkflowCreate, db: Session = Depends(get_db)):
    updated_workflow = update_workflow(workflow_id, workflow_data, db)
    if not updated_workflow:
        raise HTTPException(status_code=404, detail="Workflow not found")
    return updated_workflow

# Delete a workflow
@router.delete("/{workflow_id}")
def delete_workflow_route(workflow_id: int, db: Session = Depends(get_db)):
    success = delete_workflow(workflow_id, db)
    if not success:
        raise HTTPException(status_code=404, detail="Workflow not found")
    return {"detail": "Workflow deleted successfully"}
