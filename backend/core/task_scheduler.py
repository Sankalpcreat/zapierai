from celery_app import celery_app

@celery_app.task(bind=True)
def run_chained_tasks(self, task_data_list):
    results = []
    for task_data in task_data_list:
        result = self.app.send_task('tasks.image_generation.generate_image_task', args=[task_data['prompt'], task_data['api_key']])
        results.append(result.get())  
    return results


@celery_app.task(bind=True)
def run_parallel_tasks(self, tasks_data):
    parallel_results = []
    for task_data in tasks_data:
        result = self.app.send_task('tasks.image_generation.generate_image_task', args=[task_data['prompt'], task_data['api_key']])
        parallel_results.append(result)
    
    return [result.get() for result in parallel_results]  
