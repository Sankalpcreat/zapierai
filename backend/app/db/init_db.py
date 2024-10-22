from app.db.session import engine
from app.models import task_model, image_model

def init_db():
    task_model.Base.metadata.create_all(bind=engine)
    image_model.Base.metadata.create_all(bind=engine)
