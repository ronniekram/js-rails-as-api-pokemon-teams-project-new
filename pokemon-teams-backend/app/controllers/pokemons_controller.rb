class PokemonsController < ApplicationController
    before_action :set_pokemon, only: [:show, :destroy]
    def index
        @pokemons = Pokemon.all
        render json: @pokemons
    end 

    def create
        @pokemon = Pokemon.create(poke_params)
        render json: @pokemon
    end 

    def show
        render json: @pokemon
    end 

    def destroy
        @pokemon.destroy
    end 

    private
    def set_pokemon
        @pokemon = Pokemon.find_by(id: params[:id])
    end 

    def poke_params
        params.require(:pokemon).permit(
            :species,
            :nickname,
            :trainer_id
        )
    end 
end
