import Table from "../../Components/Table";
import { useOdContext } from "../../context/odProvider";
import OdRow from "./components/OdRow";

const OdTable = () => {
  const { data } = useOdContext();
  return (
    <Table>
      <Table.TableHead>
        <th></th>
        <th className="p-4">Name</th>
        <th>Roll No</th>
        <th>MentorCode</th>
        <th>LabCode</th>
        <th>Event Name</th>
        <th>Type</th>
        <th>From Date</th>
        <th>To Date</th>
        <th>Status</th>
        <th></th>
      </Table.TableHead>
      <Table.TableBody
        data={data || []}
        render={(item) => <OdRow key={item.rollNumber} data={item} />}
      />
    </Table>
  );
};

export default OdTable;
