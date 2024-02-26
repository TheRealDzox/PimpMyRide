import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Badge} from "@nextui-org/react";
import Christian from '../../images/team/Christian.jpg';

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
                    <Badge content="AUD" size="lg" className="bg-[#5e4db2]">
                        <img
                            width={128}
                            height={128}
                            src={Christian.src}
                            alt="Christian"
                            className="rounded-lg"
                        />
                    </Badge>
                    <p className="ml-4 mt-10 text-3xl">Christian</p>
                </div>
              </ModalHeader>
              <ModalBody className="px-10">
                <p>Meet Christian, our versatile Producer and Audio Technician.</p>
                <p>Christian's skill in producing and refining audio elevates our projects to new heights. From soundscapes to music, Christian's keen ear and technical prowess contribute to the immersive experience we strive to deliver.</p>
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
