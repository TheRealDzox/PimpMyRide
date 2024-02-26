import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Badge} from "@nextui-org/react";
import Fabian from '../../images/team/Fabian.jpg';

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
                        <Badge content="PL" size="lg" className="bg-[#f00000]">
                            <img
                                width={128}
                                height={128}
                                src={Fabian.src}
                                alt="Fabian"
                                className="rounded-lg"
                            />
                        </Badge>
                        <p className="ml-4 mt-10 text-3xl">Fabian</p>
                    </div>
                </ModalHeader>
                <ModalBody className="px-10">
                    <p>Meet Fabian, our dedicated Project Leader and Lead Programmer.</p>
                    <p>With a passion for innovation and a keen eye for detail, Fabian orchestrates the team's efforts to bring projects to life.</p>
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
