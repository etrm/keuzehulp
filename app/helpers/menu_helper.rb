module MenuHelper

  def draw_menu(enum)
    case enum

    when Hash
      haml_tag :ul do
        enum.each do |key, value|
          haml_tag :li, key
          draw_menu(value)
        end
      end

    when Array
      haml_tag :ul do
        enum.each do |key|
          haml_tag :li, key
        end
      end
    end
  end

end
