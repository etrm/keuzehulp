module MenuHelper

  def draw_menu
    form_tag('/selection') do
      - 10.times do |i|
        check_box_tag "yeah#{ i }"
      end
    end
  end

end
