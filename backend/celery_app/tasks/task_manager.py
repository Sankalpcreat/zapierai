from celery_app import celery_app
from celery import group
from services.task_service import update_task_result


@celery_app.task(bind=True)
def run_chained_tasks(self, task_data_list):
    try:
        results = []
        for task_data in task_data_list:
            result = self.app.send_task('tasks.image_generation.generate_image_task', args=[task_data['prompt'], task_data['api_key']])
            results.append(result.get())
        return results
    except Exception as e:
        raise self.retry(exc=e, countdown=60, max_retries=3)


@celery_app.task(bind=True)
def run_parallel_tasks(self, tasks_data):
    try:
        parallel_tasks = group(
            self.app.send_task(
                'tasks.image_generation.generate_image_task',
                args=[task_data['prompt'], task_data['api_key']]
            ) for task_data in tasks_data
        )
        parallel_results = parallel_tasks.apply_async()
        return parallel_results.get()  
    except Exception as e:
        raise self.retry(exc=e, countdown=60, max_retries=3)
