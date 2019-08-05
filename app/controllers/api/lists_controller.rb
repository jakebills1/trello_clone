class Api::ListsController < ApplicationController
  before_action :set_board
  before_action :set_list, only: [:update, :destroy]
  def index
    render json: @board.lists.all
  end
  def create
    list = @board.lists.create(list_params)
    if list.save
      render json: list
    else
      render json: list.errors
    end
  end
  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors
    end
  end
  def delete
    @list.destroy
  end
  private 
    def list_params
      params.require(:list).permit(:name)
    end
    def set_list
      @list = @board.lists.find(params[:id])
    end
    def set_board
      @board = Board.find(params[:board_id])
    end
end
