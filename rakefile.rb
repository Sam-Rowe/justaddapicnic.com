task default: %w[index]

task :index do
  ruby "test/index.rb"
end