class HomeController < ApplicationController
  def index
  end

  def blinked
    blink_text = params[:blink_text]
    last_blink = Blinkable.last || Blinkable.new
    new_count = (last_blink.blink_count || 0)
    new_count += 1
    Blinkable.create!(blink_text: blink_text, blink_count: new_count)
  end
end
