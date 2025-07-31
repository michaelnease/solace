import type { Advocate } from "@/types/advocates";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from "@/components/ui";

export default function AdvocatesTable({
  advocates,
}: {
  advocates: Advocate[];
}) {
  if (!advocates || advocates.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No advocates found</div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Degree</TableHead>
            <TableHead>Specialties</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {advocates.map((advocate) => (
            <TableRow key={advocate.id}>
              <TableCell className="font-medium">
                {advocate.firstName} {advocate.lastName}
              </TableCell>
              <TableCell>{advocate.city}</TableCell>
              <TableCell>{advocate.degree}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {advocate.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{advocate.yearsOfExperience} years</TableCell>
              <TableCell>{advocate.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
