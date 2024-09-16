import {
  createContext,
  Dispatch,
  useReducer,
  ReactNode,
  useContext,
} from "react";

// Define the OD data structure
interface OdData {
  name: string;
  rollNumber: string;
  mentorCode: string;
  specialLabCode: string;
  eventName: string;
  fromTime: string;
  toTime: string;
  type: "External" | "Internal";
  fromDate: string;
  toDate: string;
  approvalStatus: "pending" | "approved" | "rejected";
  rejectedReason?: string;
}

// Context type for managing state
interface OdContextType {
  data: OdData[] | undefined;
  currentOd: OdData | undefined;
  isLoading: boolean;
  error: string;
  dispatch?: Dispatch<Action>;
}

// Sample initial data array
const dataArray: OdData[] = [
  {
    name: "John Doe",
    rollNumber: "123456",
    mentorCode: "MNT2024",
    specialLabCode: "LAB123",
    eventName: "Annual Science Expo",
    fromTime: "10:00 AM",
    toTime: "12:00 PM",
    type: "External",
    fromDate: "2024-09-16",
    toDate: "2024-09-16",
    approvalStatus: "pending",
  },
  {
    name: "Jane Smith",
    rollNumber: "789012",
    mentorCode: "MNT2023",
    specialLabCode: "LAB456",
    eventName: "AI Workshop",
    fromTime: "01:00 PM",
    toTime: "03:00 PM",
    type: "Internal",
    fromDate: "2024-09-17",
    toDate: "2024-09-17",
    approvalStatus: "approved",
  },
  {
    name: "Alice Johnson",
    rollNumber: "345678",
    mentorCode: "MNT2022",
    specialLabCode: "LAB789",
    eventName: "Robotics Competition",
    fromTime: "09:00 AM",
    toTime: "11:00 AM",
    type: "External",
    fromDate: "2024-09-18",
    toDate: "2024-09-18",
    approvalStatus: "rejected",
    rejectedReason: "Incomplete documentation",
  },
  {
    name: "Bob Brown",
    rollNumber: "901234",
    mentorCode: "MNT2021",
    specialLabCode: "LAB321",
    eventName: "Hackathon",
    fromTime: "02:00 PM",
    toTime: "04:00 PM",
    type: "Internal",
    fromDate: "2024-09-19",
    toDate: "2024-09-19",
    approvalStatus: "rejected",
    rejectedReason: "Event conflict with other activity",
  },
];

const currentOd: OdData = {
  name: "John Doe",
  rollNumber: "123456",
  mentorCode: "MNT2024",
  specialLabCode: "LAB123",
  eventName: "Annual Science Expo",
  fromTime: "10:00 AM",
  toTime: "12:00 PM",
  type: "External",
  fromDate: "2024-09-16",
  toDate: "2024-09-16",
  approvalStatus: "pending",
};
// Initial state for the reducer
const initialState: OdContextType = {
  data: dataArray,
  isLoading: false,
  error: "",
  currentOd,
};

// Define action types
type Action =
  | { type: "GET/OD"; payload: OdData }
  | { type: "APPROVE/OD"; payload: string }
  | {
      type: "REJECT/OD";
      payload: { id: string; rejectedReason: string };
    }
  | { type: "DELETE/OD"; payload: string }
  | { type: "ERROR/OD"; payload: string }
  | { type: "LOADING/OD"; payload: boolean };

// Define a reducer function to handle actions
function reducer(state: OdContextType, action: Action): OdContextType {
  switch (action.type) {
    case "GET/OD":
      return {
        ...state,
        currentOd: action.payload,
        isLoading: false,
      };

    case "APPROVE/OD":
      return {
        ...state,
        data: state.data?.map((od) =>
          od.rollNumber === action.payload
            ? { ...od, approvalStatus: "approved" }
            : od
        ),
      };

    case "REJECT/OD":
      return {
        ...state,
        data: state.data?.map((od) =>
          od.rollNumber === action.payload.id
            ? {
                ...od,
                approvalStatus: "rejected",
                rejectedReason: action.payload.rejectedReason,
              }
            : od
        ),
      };

    case "DELETE/OD":
      return {
        ...state,
        data: state.data?.filter((od) => od.rollNumber !== action.payload),
      };

    case "ERROR/OD":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case "LOADING/OD":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}

// Create the context
const OdContext = createContext<OdContextType | undefined>(undefined);

export const useOdContext = () => {
  const context = useContext(OdContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

// Context provider component
export function OdProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, isLoading, error } = state;

  return (
    <OdContext.Provider value={{ data, isLoading, error, dispatch, currentOd }}>
      {children}
    </OdContext.Provider>
  );
}

export { OdContext };
