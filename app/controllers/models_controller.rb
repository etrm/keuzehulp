class ModelsController < ApplicationController
  def index
    @models = Model.all
    respond_to do |format|
      format.html { render nothing: true, status: :unauthorized }
      format.json { render json: @models.map(&:as_json) }
    end
  end
end
