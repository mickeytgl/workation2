module Mutations
  class SignOutUser < BaseMutation
    null true

    field :user, Types::UserType, null: false

    def resolve
      user = context[:current_user]
      return unless user

      context[:current_user] = nil
      context[:session][:token] = nil

      { user: user }
    end
  end
end
