import { FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  console.log("date: " + itemData.date);
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
}

export default ExpensesList;
