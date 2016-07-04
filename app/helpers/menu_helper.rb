module MenuHelper

  def draw_menu(enum)
    case enum

    when Hash
      haml_tag :ul do
        enum.each do |key, value|
          haml_tag 'li.parent' do
            haml_concat t key
            draw_menu(value)
          end
        end
      end

    when Array
      haml_tag :ul do
        enum.each do |key|
          haml_tag :li do
            haml_tag :input, type: :checkbox, id: key, name: key
            haml_tag :label, for: key, title: t("info.#{ key }"), class: 'tooltip ' do
              haml_concat t key
            end
          end
        end
      end
    end
  end

end
