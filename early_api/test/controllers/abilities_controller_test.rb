require 'test_helper'

class AbilitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ability = abilities(:one)
  end

  test "should get index" do
    get abilities_url, as: :json
    assert_response :success
  end

  test "should create ability" do
    assert_difference('Ability.count') do
      post abilities_url, params: { ability: { child_id: @ability.child_id, skill_id: @ability.skill_id, status: @ability.status } }, as: :json
    end

    assert_response 201
  end

  test "should show ability" do
    get ability_url(@ability), as: :json
    assert_response :success
  end

  test "should update ability" do
    patch ability_url(@ability), params: { ability: { child_id: @ability.child_id, skill_id: @ability.skill_id, status: @ability.status } }, as: :json
    assert_response 200
  end

  test "should destroy ability" do
    assert_difference('Ability.count', -1) do
      delete ability_url(@ability), as: :json
    end

    assert_response 204
  end
end
