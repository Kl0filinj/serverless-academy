import cardRiseMainImage1x from "@/assets/Home/mobile/whyChoose/card_rise_image_x1.png";
import cardRiseMainImage2x from "@/assets/Home/mobile/whyChoose/card_rise_image_x2.png";
import cardCoffeeMainImage1x from "@/assets/Home/mobile/whyChoose/card_coffee_image_x1.png";
import cardCoffeeMainImage2x from "@/assets/Home/mobile/whyChoose/card_coffee_image_x2.png";
import cardMilkMainImage1x from "@/assets/Home/mobile/whyChoose/card_milk_image_x1.png";
import cardMilkMainImage2x from "@/assets/Home/mobile/whyChoose/card_milk_image_x2.png";
import cardEggsMainImage1x from "@/assets/Home/mobile/whyChoose/card_eggs_image_x1.png";
import cardEggsMainImage2x from "@/assets/Home/mobile/whyChoose/card_eggs_image_x2.png";

import cardRiseCompanyLogoIcon from "@/assets/Home/shared/whyChoose/card_rise_company_logo.svg";
import cardCoffeeCompanyLogoIcon from "@/assets/Home/shared/whyChoose/card_coffee_company_logo.svg";
import cardMilkCompanyLogoIcon from "@/assets/Home/shared/whyChoose/card_milk_company_logo.svg";
import cardEggsCompanyLogoIcon from "@/assets/Home/shared/whyChoose/card_eggs_company_logo.svg";

interface ICardInfo {
  descriptionText: string;
  mainImage: {
    mobile: {
      x1: string;
      x2: string;
    };
    tablet: {
      x1: string;
      x2: string;
    };
    desktop: {
      x1: string;
      x2: string;
    };
  };
  mainImageSize: {
    mobile: {
      width: string;
      height: string;
    };
    tablet: {
      width: string;
      height: string;
    };
    desktop: {
      width: string;
      height: string;
    };
  };
  companyLogoImage: string;
}

const cardsInfo: { [key: string]: ICardInfo } = {
  rise: {
    descriptionText:
      "Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.",
    mainImage: {
      mobile: {
        x1: cardRiseMainImage1x,
        x2: cardRiseMainImage2x,
      },
      tablet: {
        x1: cardRiseMainImage1x,
        x2: cardRiseMainImage2x,
      },
      desktop: {
        x1: cardRiseMainImage1x,
        x2: cardRiseMainImage2x,
      },
    },
    mainImageSize: {
      mobile: {
        width: "183",
        height: "235",
      },
      tablet: {
        width: "183",
        height: "235",
      },
      desktop: {
        width: "183",
        height: "235",
      },
    },
    companyLogoImage: cardRiseCompanyLogoIcon,
  },
  coffee: {
    descriptionText:
      "With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
    mainImage: {
      mobile: {
        x1: cardCoffeeMainImage1x,
        x2: cardCoffeeMainImage2x,
      },
      tablet: {
        x1: cardCoffeeMainImage1x,
        x2: cardCoffeeMainImage2x,
      },
      desktop: {
        x1: cardCoffeeMainImage1x,
        x2: cardCoffeeMainImage2x,
      },
    },
    mainImageSize: {
      mobile: {
        width: "181",
        height: "246",
      },
      tablet: {
        width: "181",
        height: "246",
      },
      desktop: {
        width: "181",
        height: "246",
      },
    },
    companyLogoImage: cardCoffeeCompanyLogoIcon,
  },
  milk: {
    descriptionText:
      "Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
    mainImage: {
      mobile: {
        x1: cardMilkMainImage1x,
        x2: cardMilkMainImage2x,
      },
      tablet: {
        x1: cardMilkMainImage1x,
        x2: cardMilkMainImage2x,
      },
      desktop: {
        x1: cardMilkMainImage1x,
        x2: cardMilkMainImage2x,
      },
    },
    mainImageSize: {
      mobile: {
        width: "128",
        height: "200",
      },
      tablet: {
        width: "128",
        height: "200",
      },
      desktop: {
        width: "128",
        height: "200",
      },
    },
    companyLogoImage: cardMilkCompanyLogoIcon,
  },
  eggs: {
    descriptionText:
      "Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.",
    mainImage: {
      mobile: {
        x1: cardEggsMainImage1x,
        x2: cardEggsMainImage2x,
      },
      tablet: {
        x1: cardEggsMainImage1x,
        x2: cardEggsMainImage2x,
      },
      desktop: {
        x1: cardEggsMainImage1x,
        x2: cardEggsMainImage2x,
      },
    },
    mainImageSize: {
      mobile: {
        width: "234",
        height: "223",
      },
      tablet: {
        width: "234",
        height: "223",
      },
      desktop: {
        width: "234",
        height: "223",
      },
    },
    companyLogoImage: cardEggsCompanyLogoIcon,
  },
};
export default cardsInfo;
