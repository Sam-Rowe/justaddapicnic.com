require 'test-unit'


class TestIndex < Test::Unit::TestCase
	def test_it_exist
		assert_true Dir.glob("*").include?"index.html"
	end
end