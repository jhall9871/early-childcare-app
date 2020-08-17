class CaregiversController < ApplicationController
  before_action :set_caregiver, only: [:show, :update, :destroy]

  # GET /caregivers
  def index
    @caregivers = Caregiver.all

    render json: @caregivers.to_json(include: :children)
  end

  # GET /caregivers/1
  def show
    render json: @caregiver.to_json(include: [:children, :messages])
  end

  # POST /caregivers
  def create
    @caregiver = Caregiver.new(caregiver_params)

    if @caregiver.save
      render json: @caregiver, status: :created, location: @caregiver
    else
      render json: @caregiver.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /caregivers/1
  def update
    if @caregiver.update(caregiver_params)
      render json: @caregiver
    else
      render json: @caregiver.errors, status: :unprocessable_entity
    end
  end

  # DELETE /caregivers/1
  def destroy
    @caregiver.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_caregiver
      @caregiver = Caregiver.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def caregiver_params
      params.require(:caregiver).permit(:first_name, :last_name, :pronouns, :salutation)
    end
end
