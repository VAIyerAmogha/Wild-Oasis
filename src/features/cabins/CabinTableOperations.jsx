import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableoperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name(A-Z)" },
          { value: "name-desc", label: "Sort by Name(Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price low to High" },
          { value: "regularPrice-desc", label: "Sort by Price high to low" },
          { value: "maxCapcity-asc", label: "Sort by capacity low to high" },
          { value: "maxCapcity-desc", label: "Sort by capacity high to low" },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableoperations;
