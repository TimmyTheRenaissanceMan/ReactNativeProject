import { List } from "react-native-paper";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export const Menu = () => {
    const params = [
        {
            type: "breakfast",
            icon: "bread-slice",
            menu: ["yogurt", "eggs", "protein shake", ""],
        },
        {
            type: "lunch",
            icon: "hamburger",
            menu: ["avocado toast", "hamburger", "taco"],
        },
        {
            type: "dinner",
            icon: "food-steak",
            menu: ["Grilled Dorada", "Steak", "Sushi"],
        },
        {
            type: "drinks",
            icon: "glass-wine",
            menu: ["Yerba Mate", "Coke", "Wine", "Coffee"],
        },
    ];

    return (
            <List.Section>
                {params.map((item) => (
                    <MenuItem params={item} />
                ))}
            </List.Section>
    );
};

const MenuItem = ({ params }) => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Accordion
            title={params.type}
            left={(props) => <List.Icon {...props} icon={params.icon} />}
            expanded={expanded}
            onPress={handlePress}
        >
            {params.menu.map((menuItem) => (
                <List.Item title={menuItem} />
            ))}
        </List.Accordion>
    );
};
