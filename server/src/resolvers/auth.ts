
export default {
    Query: {
        authenticatedUser: async (_parent, { id }, { models }) => {
            return models.Auth.getAuthUser();
        }
    },
    Mutation: {
        login: async (
            _parent,
            { email, password },
            { models, auth },
        ) => {
            const authResult = await auth.signInWithEmailAndPassword(email, password);
            return models.Auth.saveAuthUser(authResult.user.uid, authResult.user.email, authResult.user.refreshToken)
        },

        logout: async (
            _parent,
            args,
            { models, auth},
        ) => {
            await auth.signOut();
            return models.Auth.removeAuthUser();
        }
    }
};
