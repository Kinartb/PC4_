# Edit app/models/moviegoer.rb to look like this:
class Moviegoer < ActiveRecord::Base
    has_many :reviews
    class << self
        def from_omniauth(auth_hash)
          user = find_or_create_by(uid: auth_hash['uid'], provider: auth_hash['provider'])
          user.name = auth_hash['info']['name']

          user.save!
          user
        end
      end
end