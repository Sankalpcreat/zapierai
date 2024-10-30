from celery import chain, group
from celery_app import celery_app

def schedule_chained_tasks(task_data_list):
    """
    Schedules tasks to be executed in a chain (sequentially).
    """
    task_chain = chain(
        celery_app.send_task('tasks.image_generation.generate_image_task', args=[task_data['prompt'], task_data['api_key']])
        for task_data in task_data_list
    )
    return task_chain.apply_async()

def schedule_parallel_tasks(tasks_data):
    """
    Schedules tasks to be executed in parallel.
    """
    parallel_group = group(
        celery_app.send_task('tasks.image_generation.generate_image_task', args=[task_data['prompt'], task_data['api_key']])
        for task_data in tasks_data
    )
    return parallel_group.apply_async()
