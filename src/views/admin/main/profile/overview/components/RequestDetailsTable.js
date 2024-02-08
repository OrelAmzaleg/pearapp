import React, { useMemo } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTable, useSortBy } from 'react-table';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function RequestDetailsTable({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Funder Icon',
        accessor: 'funderIcon',
        Cell: ({ value }) => <Avatar src={value} size="sm" />,
      },
      {
        Header: 'Funder Name',
        accessor: 'funderName',
      },
      {
        Header: 'Term',
        accessor: 'term',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Rate',
        accessor: 'rate',
      },
      {
        Header: 'Match',
        accessor: 'match',
        Cell: ({ value }) => <Badge colorScheme={value ? 'green' : 'red'}>{value ? 'Yes' : 'No'}</Badge>,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  return (
    <Box overflowX="auto">
      <Table {...getTableProps()} variant="simple" color="gray.500">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                  fontSize="sm"
                >
                  <Flex justify="space-between" align="center">
                    {column.render('Header')}
                    <Icon as={MdChevronRight} w={4} h={4} /> {/* Sort icon placeholder */}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => (
                  <Td
                    {...cell.getCellProps()}
                    key={index}
                    fontSize="sm"
                    borderColor={borderColor}
                  >
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
