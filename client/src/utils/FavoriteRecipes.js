import React from "react";

import NavLinks from "./components/LoggedInNav";

export default class FavoriteRecipes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { savedRecipes } = this.props;
        return (
            <div>
                <NavLinks />
                <ul>
                    {savedRecipes.map(recipe => {
                        return (
                            <li key={recipe.id}>
                                <div>
                                    <img className="thumb" alt="" src={recipe._links.avatar.href} />
                                </div>

                                <div className="recipeInfo">
                                    <p>
                                        {recipe.name}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}