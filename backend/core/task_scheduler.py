from celery_app import celery_app

@celery_app.task(bind=True)
def run_chained_task(self, task_data):
    # Example task chaining logic
    task_1_result = self.app.send_task('tasks.task_1', args=[task_data])
    task_2_result = task_1_result.get()
    task_3_result = self.app.send_task('tasks.task_2', args=[task_2_result])
    return task_3_result.get()

@celery_app.task(bind=True)
def parallel_tasks(self, tasks_data):
    results = []
    for data in tasks_data:
        result = self.app.send_task('tasks.parallel_task', args=[data])
        results.append(result.get())
    return results
