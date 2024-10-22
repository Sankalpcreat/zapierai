from fastapi import APIRouter
from api.routes import workflow, task, user

router = APIRouter()

# Registering all routes
router.include_router(workflow.router, prefix="/workflows", tags=["Workflows"])
router.include_router(task.router, prefix="/tasks", tags=["Tasks"])
router.include_router(user.router, prefix="/users", tags=["Users"])
