class Api::BoardsController < ApplicationController
  before_action :set_board, only: [:update, :destroy]
  def index
    render json: current_user.boards.all
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
