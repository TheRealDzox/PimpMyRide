import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Badge} from "@nextui-org/react";
import Noel from '../../images/team/Noel.jpg';

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
                    <Badge content="DEV" size="lg" className="bg-[#0055cc]">
                        <img
                            width={128}
                            height={128}
                            src={Noel.src}
                            alt="Noel"
                            className="rounded-lg"
                        />
                    </Badge>
                    <p className="ml-4 mt-10 text-3xl">Noel</p>
                </div>
              </ModalHeader>
              <ModalBody className="px-10">
                <p>Noel, our talented Programmer, is the coding wizard behind the scenes.</p>
                <p>With a knack for turning complex ideas into functional code, Noel plays a crucial role in the success of our projects. Detail-oriented and driven, he contributes to the seamless execution of every programming task.</p>
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
