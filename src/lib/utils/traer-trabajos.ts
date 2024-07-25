import { getPaginationWorks } from "@/actions";

export const traerTrabajos = async () => {
    try {
        const worksData = await getPaginationWorks();
        return worksData;
    } catch (error) {
        console.error("Error fetching works:", error);
        throw new Error("Error fetching works");
    }
};
