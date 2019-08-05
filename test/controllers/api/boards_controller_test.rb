require 'test_helper'

class Api::BoardsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  setup do 
    post "/api/auth/sign_in", { email: "test@test.com", password: "password"}
  end
  test "should get index" do 
    get :index
    assert_response :success
  end
end
