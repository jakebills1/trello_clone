class Board < ApplicationRecord
  belongs_to :user
  has_many :lists
  def find_lists_and_tasks
    board_hash = Hash.new
    board_hash[:board] = self
    board_hash[:lists] = []
    arr = self.lists.all
    arr.each do |a|
      obj = {
        list: a,
        tasks: a.tasks.all
      }
      board_hash[:lists] << obj
    end
    return board_hash
  end
end
