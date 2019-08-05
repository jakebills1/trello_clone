class Api::TasksController < ApplicationController
  before_action :set_list
  before_action :set_task
  def index
    render json: @list.tasks.all
  end
  def create
    task = @list.tasks.create(task_params)
    if task.save
      render json: task
    else
      render json: task.errors
    end
  end
  def update
    if @task.update(task_params)
      render json: task
    else
      render json: @task.errors
    end
  end
  def delete
    @task.destroy
  end 
  private
    def task_params
      params.require(:task).permit(:name, :priority, :complete)
    end
    def set_list
      @list = List.find(params[:list_id])
    end
    def set_task
      @task = @list.tasks.find(params[:id])
    end
end
