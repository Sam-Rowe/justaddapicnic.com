require "json"

list_of_locations = Dir.entries("../_posts/")

list_of_locations.each do |location_filename|
	location = location_filename.sub(/\d{4}-\d{2}-\d{2}-/,"")
	location = location.sub(/.markdown/,"") 
	location = location.sub(/-/," ")
	puts "File #{location_filename} is for '#{location}'"
end 
