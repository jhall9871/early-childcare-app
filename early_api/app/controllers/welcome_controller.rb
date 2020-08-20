class WelcomeController < ApplicationController
    def index
        render json: 'hello'
    end

end
