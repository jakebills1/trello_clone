namespace :update do 
  desc "updates case of task.priority to be downcase"
  task lowercase_priority: :environment do 
    t = Task.all
    t.each do |task|
      task.update(priority: task.priority.downcase)
    end
  end
end