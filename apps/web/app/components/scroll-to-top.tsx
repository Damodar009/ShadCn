import { ChevronUpIcon } from "@radix-ui/react-icons";
import { Button } from "../../../../shared/src/components/ui/button";

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:move-up"
        >
            <ChevronUpIcon className="h-4 w-4" />
        </Button>
    );
};

export default ScrollToTopButton;
