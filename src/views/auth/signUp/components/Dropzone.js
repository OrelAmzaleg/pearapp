import React, { useState, useCallback, useEffect } from 'react';
import { Flex, Input, Button, useColorModeValue, Box, Icon, Text, List, ListItem, ListIcon, Card } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { FiFile } from 'react-icons/fi'; // File icon
import { MdOutlineCloudUpload } from "react-icons/md"; // Cloud upload icon

function Dropzone() {
  const [files, setFiles] = useState([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brand = useColorModeValue("brand.500", "brand.400");
  const bg = useColorModeValue("gray.100", "navy.700");
  const borderColor = useColorModeValue("gray.300", "whiteAlpha.100");

  const onDrop = useCallback(acceptedFiles => {
    // Append new files to the existing files
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))]);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*, .pdf',
    onDrop
  });

  useEffect(() => {
    // Revoke data uris to avoid memory leaks
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Card p='30px'>
      {files.length === 0 && (
        <Flex
          align='center'
          justify='center'
          bg={bg}
          border='1px dashed'
          borderColor={borderColor}
          borderRadius='16px'
          w='100%'
          maxW='100%'
          h={{ base: '208px', '3xl': '300px' }}
          cursor='pointer'
          {...getRootProps({ className: 'dropzone' })}
        >
          <Input variant='main' {...getInputProps()} />
          <Box maxW='100%'>
            <Icon as={MdOutlineCloudUpload} w='80px' h='80px' color={textColor} />
            <Text mb='12px' fontSize='lg' w='100%' maxW='100%' fontWeight='700' color={textColor} whiteSpace='pre-wrap'>
              Drop your bank statements here, or{" "}
              <Text as='span' fontSize='lg' fontWeight='700' color={brand}>
                click to browse
              </Text>
            </Text>
            <Text fontSize='sm' fontWeight='500' color='secondaryGray.500' whiteSpace='pre-wrap !important'>
              up to 10MB, Only PDF File, make sure the file is not protected with Password
            </Text>
          </Box>
        </Flex>
      )}

      {files.length > 0 && (
        <List spacing={3}>
          {files.map((file, index) => (
            <ListItem key={index}>
              <Flex align='center'>
                <ListIcon as={FiFile} color='blue.500' />
                <Text fontSize='sm'>{file.name}</Text>
              </Flex>
            </ListItem>
          ))}
          <Button onClick={open} mt={4} colorScheme="blue">Add More Files</Button>
        </List>
      )}
    </Card>
  );
}

export default Dropzone;
