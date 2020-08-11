require 'test_helper'

class CaregiversControllerTest < ActionDispatch::IntegrationTest
  setup do
    @caregiver = caregivers(:one)
  end

  test "should get index" do
    get caregivers_url, as: :json
    assert_response :success
  end

  test "should create caregiver" do
    assert_difference('Caregiver.count') do
      post caregivers_url, params: { caregiver: { first_name: @caregiver.first_name, last_name: @caregiver.last_name, pronouns: @caregiver.pronouns, salutation: @caregiver.salutation } }, as: :json
    end

    assert_response 201
  end

  test "should show caregiver" do
    get caregiver_url(@caregiver), as: :json
    assert_response :success
  end

  test "should update caregiver" do
    patch caregiver_url(@caregiver), params: { caregiver: { first_name: @caregiver.first_name, last_name: @caregiver.last_name, pronouns: @caregiver.pronouns, salutation: @caregiver.salutation } }, as: :json
    assert_response 200
  end

  test "should destroy caregiver" do
    assert_difference('Caregiver.count', -1) do
      delete caregiver_url(@caregiver), as: :json
    end

    assert_response 204
  end
end
