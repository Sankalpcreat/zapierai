from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from core.config import settings

# Base model to be inherited by other models
Base = declarative_base()

# Database engine and session maker
engine = create_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Initialize the database models
def init_db():
    import models.user
    import models.task
    import models.workflow
    Base.metadata.create_all(bind=engine)
