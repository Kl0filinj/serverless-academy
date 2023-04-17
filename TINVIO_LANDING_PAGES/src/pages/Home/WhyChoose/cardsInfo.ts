import mobile_cardRiseMainImage1x from "@/assets/Home/mobile/whyChoose/card_rise_image_x1.png";
import mobile_cardRiseMainImage2x from "@/assets/Home/mobile/whyChoose/card_rise_image_x2.png";
import tablet_cardRiseMainImage1x from "@/assets/Home/tablet/whyChoose/card_rise_image_x1.png";
import tablet_cardRiseMainImage2x from "@/assets/Home/tablet/whyChoose/card_rise_image_x2.png";
import desktop_cardRiseMainImage1x from "@/assets/Home/desktop/whyChoose/card_rise_image_x1.png";
import desktop_cardRiseMainImage2x from "@/assets/Home/desktop/whyChoose/card_rise_image_x2.png";

import mobile_cardCoffeeMainImage1x from "@/assets/Home/mobile/whyChoose/card_coffee_image_x1.png";
import mobile_cardCoffeeMainImage2x from "@/assets/Home/mobile/whyChoose/card_coffee_image_x2.png";
import tablet_cardCoffeeMainImage1x from "@/assets/Home/tablet/whyChoose/card_coffee_image_x1.png";
import tablet_cardCoffeeMainImage2x from "@/assets/Home/tablet/whyChoose/card_coffee_image_x2.png";
import desktop_cardCoffeeMainImage1x from "@/assets/Home/desktop/whyChoose/card_coffee_image_x1.png";
import desktop_cardCoffeeMainImage2x from "@/assets/Home/desktop/whyChoose/card_coffee_image_x2.png";

import mobile_cardMilkMainImage1x from "@/assets/Home/mobile/whyChoose/card_milk_image_x1.png";
import mobile_cardMilkMainImage2x from "@/assets/Home/mobile/whyChoose/card_milk_image_x2.png";
import tablet_cardMilkMainImage1x from "@/assets/Home/tablet/whyChoose/card_milk_image_x1.png";
import tablet_cardMilkMainImage2x from "@/assets/Home/tablet/whyChoose/card_milk_image_x2.png";
import desktop_cardMilkMainImage1x from "@/assets/Home/desktop/whyChoose/card_milk_image_x1.png";
import desktop_cardMilkMainImage2x from "@/assets/Home/desktop/whyChoose/card_milk_image_x2.png";

import mobile_cardEggsMainImage1x from "@/assets/Home/mobile/whyChoose/card_eggs_image_x1.png";
import mobile_cardEggsMainImage2x from "@/assets/Home/mobile/whyChoose/card_eggs_image_x2.png";
import tablet_cardEggsMainImage1x from "@/assets/Home/tablet/whyChoose/card_eggs_image_x1.png";
import tablet_cardEggsMainImage2x from "@/assets/Home/tablet/whyChoose/card_eggs_image_x2.png";
import desktop_cardEggsMainImage1x from "@/assets/Home/desktop/whyChoose/card_eggs_image_x1.png";
import desktop_cardEggsMainImage2x from "@/assets/Home/desktop/whyChoose/card_eggs_image_x2.png";

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
        x1: mobile_cardRiseMainImage1x,
        x2: mobile_cardRiseMainImage2x,
      },
      tablet: {
        x1: tablet_cardRiseMainImage1x,
        x2: tablet_cardRiseMainImage2x,
      },
      desktop: {
        x1: desktop_cardRiseMainImage1x,
        x2: desktop_cardRiseMainImage2x,
      },
    },
    mainImageSize: {
      mobile: {
        width: "183px",
        height: "235px",
      },
      tablet: {
        width: "230px",
        height: "298px",
      },
      desktop: {
        width: "277px",
        height: "353px",
      },
    },
    companyLogoImage: cardRiseCompanyLogoIcon,
  },
  coffee: {
    descriptionText:
      "With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
    mainImage: {
      mobile: {
        x1: mobile_cardCoffeeMainImage1x,
        x2: mobile_cardCoffeeMainImage2x,
      },
      tablet: {
        x1: tablet_cardCoffeeMainImage1x,
        x2: tablet_cardCoffeeMainImage2x,
      },
      desktop: {
        x1: desktop_cardCoffeeMainImage1x,
        x2: desktop_cardCoffeeMainImage2x,
      },
    },
    mainImageSize: {
      mobile: {
        width: "181px",
        height: "246px",
      },
      tablet: {
        width: "257px",
        height: "322px",
      },
      desktop: {
        width: "290px",
        height: "366px",
      },
    },
    companyLogoImage: cardCoffeeCompanyLogoIcon,
  },
  milk: {
    descriptionText:
      "Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
    mainImage: {
      mobile: {
        x1: mobile_cardMilkMainImage1x,
        x2: mobile_cardMilkMainImage2x,
      },
      tablet: {
        x1: tablet_cardMilkMainImage1x,
        x2: tablet_cardMilkMainImage2x,
      },
      desktop: {
        x1: desktop_cardMilkMainImage1x,
        x2: desktop_cardMilkMainImage2x,
      },
    },
    mainImageSize: {
      mobile: {
        width: "128px",
        height: "200px",
      },
      tablet: {
        width: "180px",
        height: "300px",
      },
      desktop: {
        width: "218px",
        height: "335px",
      },
    },
    companyLogoImage: cardMilkCompanyLogoIcon,
  },
  eggs: {
    descriptionText:
      "Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.",
    mainImage: {
      mobile: {
        x1: mobile_cardEggsMainImage1x,
        x2: mobile_cardEggsMainImage2x,
      },
      tablet: {
        x1: tablet_cardEggsMainImage1x,
        x2: tablet_cardEggsMainImage2x,
      },
      desktop: {
        x1: desktop_cardEggsMainImage1x,
        x2: desktop_cardEggsMainImage2x,
      },
    },
    mainImageSize: {
      mobile: {
        width: "234px",
        height: "223px",
      },
      tablet: {
        width: "301px",
        height: "287px",
      },
      desktop: {
        width: "328px",
        height: "317px",
      },
    },
    companyLogoImage: cardEggsCompanyLogoIcon,
  },
};
export default cardsInfo;
