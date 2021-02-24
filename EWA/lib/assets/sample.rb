class ActiveRecord::Base

  class << self
    def sample(n=1)
      self.order('rand()').first(n)
    end
  end

end