class Api::BoardsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_board, only: [:update, :destroy]
  def index
    arr = []
    boards = current_user.boards.all 
    # for each board, collect all lists and tasks for each list
    boards.each do |board|
      obj = board.find_lists_and_tasks
      arr << obj
    end
    render json: arr.to_json
  end
  def create
    board = current_user.boards.create(board_params)
    if board.save
      render json: board
    else
      render json: board.errors
    end
  end
  def update
    if @board.update(board_params)
      render json: @board
    else
      render json: @board.errors
    end
  end
  def delete
    @board.destroy
  end
  private
    def board_params
      params.require(:board).permit(:name)
    end
    def set_board
      @board = current_user.boards.find(params[:id])
    end
end
