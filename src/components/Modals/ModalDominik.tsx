import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Badge} from "@nextui-org/react";
import Dominik from '../../images/team/Dominik.jpg';

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="text-tiny text-white bg-white/20" variant="flat" color="default" radius="md" size="sm" onPress={onOpen}>Details</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex justify-left px-5 pt-5">
                    <Badge content="SYT" size="lg" className="bg-[#94c748]">
                        <img
                            width={128}
                            height={128}
                            src={Dominik.src}
                            alt="Dominik"
                            className="rounded-lg"
                        />
                    </Badge>
                    <p className="ml-4 mt-10 text-3xl">Dominik</p>
                </div>
              </ModalHeader>
              <ModalBody className="px-10">
                <p>Dominik is our System Technician and Programmer.</p>
                <p>With a deep understanding of systems and a passion for programming, Dominik's expertise ensures the efficiency and reliability of the technical aspects driving our creations.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
