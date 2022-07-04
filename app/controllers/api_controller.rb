class ApiController < ApplicationController
  include Response

  def random_greeting
    greeting = Greeting.find(Greeting.pluck(:id).sample)
    json_response(greeting)
  end
end
